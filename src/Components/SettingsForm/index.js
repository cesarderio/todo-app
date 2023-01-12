import React, { useContext, useState } from "react";
import {
  Button,
  createStyles,
  Group,
  Card,
  NumberInput,
  Switch,
  Grid,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSettings } from "@tabler/icons";
import { SettingsContext } from "../../Context/Settings";

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: "80%",
    margin: "auto",
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
    // paddingLeft: theme.spacing.md,
    // marginLeft: theme.spacing.md,
  },
}));

const SettingsForm = () => {
  const [show, setShow] = useState(false);

  const { showComplete, setShowComplete, pageItems, setPageItems, sort, setSort, saveLocally } =
    useContext(SettingsContext);

    const { classes } = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true)
    saveLocally();
  };

  return (
    <>
      <h1 className={classes.h1}>
        <IconSettings /> Manage Settings
      </h1>
      <Grid style={{ padding:"10px", width: "80%", margin: "auto" }}>
        <Grid.Col xs={12} sm={6}>
          <Card withBorder p="sm">
         
              <Text>Updated Settings</Text>
              <form onSubmit={handleSubmit}>
                <Switch
                  label="Show Completed Todos"
                  checked={showComplete}
                  onChange={(event) => setShowComplete(event.currentTarget.checked)}
                />
                <NumberInput
                  mb="sm"
                  value={pageItems}
                  label="Items Per Page"
                  onChange={(value) => setPageItems(value)}
                />
                <TextInput
                  mb="sm"
                  placeholder={sort}
                  onChange={(e) => setSort(e.target.value)}
                  label="Sort Keyword"
                />
                <Button type="submit" >Show New Settings</Button>
              </form>
         
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Card>
            {/* conditionally render settings changes here */}
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default SettingsForm;
