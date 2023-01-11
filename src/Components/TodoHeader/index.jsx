import { Text, createStyles } from "@mantine/core";
import React, { useContext } from "react";
import { SettingsContext } from "../../Context/Settings/index.jsx";

const todoHeaderStyle = createStyles((theme) => ({
  todoHeader: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[0],
  },
}));

const TodoHeader = () => {
  const [incomplete, setIncomplete] = useContext(SettingsContext);

  // const { showComplete, pageItems, sort } = useContext(SettingsContext);

  const { classes } = todoHeaderStyle();

  return (
    <>
      <header className={classes.todoHeader}>
        <Text>To Do List: {incomplete} items pending</Text>
        {/* <Text className="todo-h1" data-testid="todo-h1">
          To Do List: {incomplete} items pending
        </Text> */}
      </header>
    </>
  );
};

export default TodoHeader;


