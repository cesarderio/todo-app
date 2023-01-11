import { Text, createStyles } from "@mantine/core";

const navBarStyle = createStyles((theme) => ({
  navBar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[0],
  },
}));

const NavBar = () => {
  const { classes } = navBarStyle();

  return (
    <>
    <div className={classes.navBar}>
{/* <Home></Home> */}
{/* <Settings></Settings> */}
      <h1 >
        <Text>Home</Text>
      </h1>
      <h1>
        <Text>Settings</Text>
      </h1>
    </div>
    </>
  );
};

export default NavBar;
