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
    // padding: theme.spacing.md,
  },
}));

const ToDo = () => {
  // const { showComplete, setShowComplete, pageItems, setPageItems, sort, setSort, saveLocally } =
  // useContext(SettingsContext);
  const { setShow, showComplete, pageItems, sort } = useContext(SettingsContext);
  // const { can } = useContext(AuthContext);
  console.log("todo: ", showComplete, pageItems, sort);

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  // const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  // const ApiList = async (username, password) => {
  //   let ApiListConfig = {
  //     baseURL: "https://api-js401.herokuapp.com",
  //     url: "/get",
  //     method: "get",
  //     auth: { username, password },
  //   };
  // let response = await axios(ApiListConfig)
  // }
  //  addItem = async(item){
  //   let addItemConfig = {
  //     baseURL: "https://api-js401.herokuapp.com/api/v1/todo",
  //     url: "/post",
  //     method: "post",
  //     auth: { username, password },
  //   }
  //   let response = await axios.post(addItemConfig);
  // }

  function addItem(item, username, password) {
    let addItemConfig = {
      baseURL: "https://api-js401.herokuapp.com/api/v1/todo",
      url: "/post",
      method: "post",
      auth: { username, password },
    };
    let response = axios.post(addItemConfig);
    // }
    // return axios.post()
    //   item.id = uuid();
    //   item.complete = false;
    //   console.log(item);
    setList([...list, item]);
  }
  // function deleteItem(id, username, password){
  //   let deleteItemConfig = {
  //     baseURL: "https://api-js401.herokuapp.com/api/v1/todo",
  //     url: "/id",
  //     method: "delete",
  //     auth: { username, password },
  //   }
  //   let response = axios.delete(deleteItemConfig);
  // }
  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }
  // function toggleComplete(id, username, password){
  //   let toggleConfig = {
  //     baseURL: "https://api-js401.herokuapp.com/api/v1/todo",
  //     url: "/id",
  //     method: "put",
  //     auth: { username, password },
  //   }
  //   let response = axios.put(toggleConfig)
  // }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const { classes } = useStyle();
  // const { login, logout, user } = useContext(AuthContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShow(true)
  //   saveLocally();
  // };

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
