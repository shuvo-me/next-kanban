import { addProject } from "@/lib/actions";
import { PlusIcon } from "@radix-ui/react-icons";
import { Box, Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import React, {
  type MutableRefObject,
  useRef,
  useState,
  LegacyRef,
} from "react";

const AddProjectButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  const handleAddProject = async () => {
    if (!projectName.length) {
      return setShowError(true);
    }

    try {
      const res = await addProject(projectName);
      console.log({ res });
    } catch (error) {
      console.log({ error });
    }
  };

  const resetForm = () => {
    setShowError(false);
    setProjectName("");
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button className=" !cursor-pointer" type="button">
          <Flex align={"center"} gap={"2"}>
            Add Project
            <PlusIcon />
          </Flex>
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="650px">
        <Dialog.Title>Add Project</Dialog.Title>

        <Box className="space-y-1">
          <label htmlFor="project_name" className="text-sm">
            Project Name
          </label>
          <TextField.Root
            radius="large"
            placeholder="Add project name…"
            id="project_name"
            onInput={(e) => {
              setProjectName((e.target as HTMLInputElement).value);
            }}
          />
          {showError ? (
            <Text color="red" size={"1"}>
              *project name is required.
            </Text>
          ) : (
            ""
          )}
        </Box>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={resetForm}>
              Cancel
            </Button>
          </Dialog.Close>

          <Button type="button" onClick={handleAddProject}>
            Add
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddProjectButton;
