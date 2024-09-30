'use client';
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/client';

import PageContainer from '@/app/(dashboard)/components/container/PageContainer';
import DashboardCard from '@/app/(dashboard)/components/shared/DashboardCard';
import ContactForm from './ContactForm';
import { CustomIconButton } from '../utils/theme/DefaultColors';
import CustomTextField from '../components/forms/theme-elements/CustomTextField';

interface Contact {
    id: number | null;
    name: string | null;
    email: string | null;
    phone_number: string | null;
    company: string | null;
    state_name: string | null;
}

interface Params {
    row: Contact;
}

type SetContacts = React.Dispatch<React.SetStateAction<Contact[]>>;

const paginationModel = { page: 0, pageSize: 5 };

async function addUpdateContact(supabase: SupabaseClient, setContacts: SetContacts, contact: Contact) {
    let req = null, errorMsg = "", successMsg = "";
    if (contact.id) {
        req = await supabase.from('contacts').update({
            name: contact.name,
            email: contact.email,
            phone_number: contact.phone_number,
            company: contact.company,
            state_name: contact.state_name,
        }).match({ id: contact.id });
        errorMsg = "Error inserting contact";
        successMsg = "Contact added successfully!"
    } else {
        req = await supabase.from('contacts').insert([
            {
                name: contact.name,
                email: contact.email,
                phone_number: contact.phone_number,
                company: contact.company,
                state_name: contact.state_name,
            },
        ]);
        errorMsg = "Error updating contact";
        successMsg = "Contact updated successfully!"
    }

    if (req.error) {
        console.error(errorMsg, req.error);
    } else {
        console.info(successMsg);
        fetchContacts(supabase, setContacts); // Refresh the contact list
    }
}

async function deleteContact(supabase: SupabaseClient, setContacts: SetContacts, id: string) {
    const { error } = await supabase.from('contacts').delete().match({ id });

    if (error) {
        console.error('Error deleting contact:', error);
    } else {
        console.info('Contact deleted successfully!');
        fetchContacts(supabase, setContacts); // Refresh the contact list
    }
}

async function fetchContacts(supabase: SupabaseClient, setContacts: SetContacts) {
    const { data, error } = await supabase.from('contacts').select('*').order('id', { ascending: true });
    if (error) {
        console.error('Error fetching contacts:', error);
    } else {
        setContacts(data);
        console.info('Contacts fetched:', data);
    }
}

const MemoizedDataGrid = React.memo(({ rows, columns, ...rest }: { rows: Contact[], columns: GridColDef[], [key: string]: any }) => {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            {...rest} // Spread the rest of the props here
        />
    );
}, (prevProps, nextProps) => {
    // Only re-render if the rows or columns change
    return prevProps.rows === nextProps.rows && prevProps.columns === nextProps.columns;
});



const Contact = () => {
    const supabase = createClient();
    const [contacts, setContacts] = React.useState<Contact[]>([]);
    const [forEditData, setForEditData] = React.useState<Contact>({
        id: 0,
        name: "",
        email: "",
        state_name: "",
        phone_number: "",
        company: "",
    });
    const [openContactForm, setOpenContactForm] = React.useState<boolean>(false);

    React.useEffect(() => {
        (async () => {
            await fetchContacts(supabase, setContacts);
        })()
    }, [supabase])

    const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
        console.info("dataset ", event.target);
    }

    // Memoize the handleEdit function to prevent re-creation
    const handleEdit = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        const row: string = event?.currentTarget?.dataset?.row || "";
        const jsonRow = JSON.parse(row);
        setForEditData(jsonRow);
        setOpenContactForm(true);
    }, []);

    // Memoize handleChange to prevent unnecessary re-renders
    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (!name) return;

        setForEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    // Memoize handleSaveContact to prevent unnecessary re-renders
    const handleSaveContact = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addUpdateContact(supabase, setContacts, forEditData);
        setOpenContactForm(false);
    }, [supabase, forEditData]);

    // Memoized DataGrid
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, headerAlign: "center", align: "center" },
        { field: 'name', headerName: 'Name', width: 130, headerAlign: "center", align: "center" },
        { field: 'email', headerName: 'Email', width: 130, headerAlign: "center", align: "center" },
        { field: 'phone_number', headerName: 'Phone Number', type: 'number', flex: 1, headerAlign: "center", align: "center" },
        { field: 'company', headerName: 'Company', sortable: false, width: 160, headerAlign: "center", align: "center" },
        { field: 'state_name', headerName: 'State', type: 'number', flex: 1, headerAlign: "center", align: "center" },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
                <Stack direction="row" style={{ display: "flex", alignItems: "center", justifyContent: "center" }} spacing={1}>
                    <CustomIconButton variant="IconGreen" aria-label="edit" data-row={JSON.stringify(params?.row)} onClick={handleEdit}>
                        <ModeEditIcon />
                    </CustomIconButton>
                    <CustomIconButton variant="IconRed" aria-label="delete" data-id={params?.row?.id}>
                        <DeleteIcon />
                    </CustomIconButton>
                </Stack>
            ),
        },
    ];

    return (
        <PageContainer title="Contact" description="List of all contact">
            {/* <DashboardCard title="Contacts" subtitle="Upload your list of agents and start sending out rates.">
                <ContactCard />
            </DashboardCard> */}
            <DashboardCard title="Rate Sheet Overview" subtitle="Summary of all metrics, import and edit table">
                <Paper sx={{ minHeight: 500, width: '100%', paddingBottom: "50px" }}>
                    <Grid container spacing={3} p={5}>
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Stack sx={{ maxHeight: "40px" }} direction="row" spacing={2}>
                                <Button sx={{ minWidth: "130px", height: "40px" }} onClick={() => setOpenContactForm(true)} variant="contained" size="small" startIcon={<AddIcon />} >Add Contact</Button>
                                <CustomTextField required variant="outlined" name="name" placeholder="Search" fullWidth />
                            </Stack>
                        </Grid>
                    </Grid>
                    <MemoizedDataGrid
                        rows={contacts}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </DashboardCard>
            <ContactForm open={openContactForm} setOpen={setOpenContactForm} handleSubmit={handleSaveContact} forEditData={forEditData} handleChange={handleChange} />
        </PageContainer>
    );
};

export default Contact;

