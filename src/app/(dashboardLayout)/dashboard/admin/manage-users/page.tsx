"use client"
import { deleteUser } from '@/lib/api/products/action';
import { getUsers } from '@/lib/api/products/data';
import { AlertDialog, Button, Table } from '@heroui/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';


interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
 
}

const columns = [
  { id: "name", name: "name" },
  { id: "enmail", name: "email" },
  { id: "role", name: "role" },
  { id: "actions", name: "Actions" },
];


const ManageUserPage = () => {
    const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  loadUsers();
}, []);

const handleDelete = async (id: string) => {
  try {
    const result = await deleteUser(id);

    if (result.deletedCount > 0) {
      toast.success("User deleted successfully!");

      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
    }
  } catch (error) {
    toast.error("Something went wrong!");
    console.log(error);
  }
};
    return (
        <div>
             <Table>
                    <Table.ScrollContainer className="overflow-x-auto">
                      <Table.Content
                        aria-label="Manage Products Table"
                        className="min-w-[700px]"
                      >
                        <Table.Header>
                          {columns.map((column) => (
                            <Table.Column
                              key={column.id}
                              id={column.id}
                              isRowHeader={column.id === "name"}
                            >
                              {column.name}
                            </Table.Column>
                          ))}
                        </Table.Header>
            
                       <Table.Body>
  <Table.Collection items={users}>
    {(user: User) => (
      <Table.Row key={user._id}>
        <Table.Cell>{user.name}</Table.Cell>

        <Table.Cell>{user.email}</Table.Cell>

        <Table.Cell>{user.role}</Table.Cell>

        <Table.Cell>
          <div className="flex gap-2">
            {/* Delete Button */}
            <AlertDialog>
              <Button
                className="rounded-full text-red-500"
                variant="outline"
              >
                <MdDelete />
              </Button>

              <AlertDialog.Backdrop>
                <AlertDialog.Container>
                  <AlertDialog.Dialog className="sm:max-w-[400px]">
                    <AlertDialog.CloseTrigger />

                    <AlertDialog.Header>
                      <AlertDialog.Icon status="danger" />
                      <AlertDialog.Heading>
                        Delete {user.name} permanently?
                      </AlertDialog.Heading>
                    </AlertDialog.Header>

                    <AlertDialog.Body>
                      <p>
                        This will permanently delete{" "}
                        <strong>{user.name}</strong> and all of
                        their data. This action cannot be undone.
                      </p>
                    </AlertDialog.Body>

                    <AlertDialog.Footer>
                      <Button
                        slot="close"
                        variant="tertiary"
                      >
                        Cancel
                      </Button>

                      <Button
                        slot="close"
                        variant="danger"
                        onPress={() =>
                          handleDelete(user._id)
                        }
                      >
                        Delete
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>
          </div>
        </Table.Cell>
      </Table.Row>
    )}
  </Table.Collection>
</Table.Body>
                      </Table.Content>
                    </Table.ScrollContainer>
                  </Table>
        </div>
    );
};

export default ManageUserPage;