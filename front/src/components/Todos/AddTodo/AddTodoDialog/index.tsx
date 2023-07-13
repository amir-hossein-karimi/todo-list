import { Dialog } from "@mui/material";
import { FC } from "react";

interface addTodoDialogProps {
  open: boolean;
  toggleDialog: () => void;
  children: React.ReactNode;
}

const AddTodoDialog: FC<addTodoDialogProps> = ({ open, toggleDialog }) => {
  return (
    <Dialog open={open} onClose={toggleDialog}>
      test
    </Dialog>
  );
};

export default AddTodoDialog;
