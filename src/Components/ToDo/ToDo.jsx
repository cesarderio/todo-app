import React, { useContext, useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
// import TodoHeader from "../TodoHeader/index.jsx";
import { v4 as uuid } from "uuid";
import { Button, Card, createStyles, Grid, Group, Slider, Text, TextInput } from "@mantine/core";
import List from "../List";
import { SettingsContext } from "../../Context/Settings/index.jsx";
import Auth from "../Auth/index.jsx";
import { AuthContext } from "../../Context/Auth/index.jsx";
import axios from "../../hooks/axios.js";

const useStyle = createStyles((theme) => ({
  todoHeader: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: "80%",
    margin: "auto",
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  todoForm: {
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.xl,
  },
}));

const ToDo = () => {
  const { classes } = useStyle();
  const { showComplete, pageItems, sort } = useContext(SettingsContext);
  // const { can } = useContext(AuthContext);
  console.log("todo: ", showComplete, pageItems, sort);

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  async function addItem(item) {
    item.complete = false;

    const addItemConfig = {
      baseURL: "https://api-js401.herokuapp.com/api/v1",
      url: "/todo",
      method: "post",
      data: item,
    };
    const response = await axios(addItemConfig);
    setList([...list, response.data]);
  }

  async function deleteItem(id){
    const deleteItemConfig = {
      baseURL: "https://api-js401.herokuapp.com/api/v1",
      url: `/todo/${id}`,
      method: "delete",

    }
    const response = await axios(deleteItemConfig);
    getList();
  }
  async function toggleComplete(item){
    const complete = !item.complete;
    const toggleConfig = {
      baseURL: "https://api-js401.herokuapp.com/api/v1",
      url: `/todo/${item._id}`,
      method: "put",
      data: {...item, complete }
    }
    const response = await axios(toggleConfig)
    getList();
  }

  // function toggleComplete(id) {
  //   const items = list.map(item => {
  //     if (item._id === id) {
  //       item.complete = !item.complete;
  //     }
  //     return item;
  //   });
  //   setList(items);
  // }


async function getList() {
  const config = {
    baseURL: "https://api-js401.herokuapp.com/api/v1",
    url: "/todo",
    method: "get",
  }
  let response = await axios(config);
  setList(response.data.results);
}

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  useEffect(() => {
    ( async() => {
      const config = {
        baseURL: "https://api-js401.herokuapp.com/api/v1",
        url: "/todo",
        method: "get",
      }
      let response = await axios(config);
      setList(response.data.results);
    })()
  }, []);

  return (
    <>
      <h1 className={classes.todoHeader} data-testid="todo-header">
        To Do List: {incomplete} items pending
      </h1>
      <Group>
        <Grid style={{ width: "80%", margin: "auto" }}>
          <Auth capability="create">
            <Grid.Col xs={12} sm={4}>
              <Card withBorder p="sm">
                <form className={classes.todoForm} onSubmit={handleSubmit}>
                  <h2>Add To Do Item</h2>
                  <TextInput
                    name="text"
                    placeholder="Item Details"
                    onChange={handleChange}
                    label="Todo Item"
                  />
                  <TextInput
                    name="assignee"
                    placeholder="Assignee Name"
                    onChange={handleChange}
                    label="Assigned To"
                  />
                  <Text>Difficulty</Text>
                  <Slider
                    name="Difficulty"
                    onChange={handleChange}
                    min={1}
                    max={5}
                    step={1}
                    defaultValue={defaultValues.difficulty}
                  />

                  <Button type="submit" onChange={(e) => addItem(e.target.value)}>
                    Add Item
                  </Button>
                </form>
              </Card>
            </Grid.Col>
          </Auth>
          <Auth capability="read">
            <Grid.Col xs={12} sm={8}>
              <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
            </Grid.Col>
          </Auth>
        </Grid>
      </Group>
    </>
  );
};

export default ToDo;
