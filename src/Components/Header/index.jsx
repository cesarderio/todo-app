import { Text, createStyles } from "@mantine/core";

const headerStyle = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.color.gray[0],
  }
}))


const Header = () => {

const { classes } = headerStyle();

  return(
    <>
    <header className={classes.header}>
      <Text>Home</Text>

    </header>
    </>
  )
}

export default Header;
