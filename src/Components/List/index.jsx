import { Button, Group, Pagination } from '@mantine/core';
import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { createStyles } from "@mantine/core";


const useStyle = createStyles((theme) => ({
  listStyle: {
    padding: theme.spacing.sm,
    // margin: theme.spacing.md,
    // fontSize: theme.fontSizes.sm,
  },

}));




const List = ({list, toggleComplete}) => {


  const { showCompleted, pageItems } = useContext(SettingsContext);
  const [page, setPage] = useState(1);

  // pagination
  const listToRender = showCompleted ? list : list.filter(item => !item.complete);
  const listStart = pageItems * (page - 1); 
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);

  const displayList = listToRender.slice(listStart, listEnd);
  
  const { classes } = useStyle();

 return(
  <>
  {displayList.map(item => (
    <div key={item.id} className={classes.listStyle}>
      <ul>
        <li key={`list-${item}`}>
          <Group position='apart'>
            <Group>
          {item.text} 
            </Group>
            <Group position='right'>
          {`difficulty: ${item.difficulty}`}
            </Group>
            
          </Group>
          </li>
      </ul>
        <Button onClick={() => toggleComplete(item.id)}>Pending</Button>
      <hr />
    </div>
  ))}
  <Pagination page={page} onChange={setPage} total={pageCount}/>
  </>
 )
}

export default List;
