import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// Icons
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToDo from './ToDo';

// Component

export default function TodoList() {
  return (
      <Container maxWidth="sm">
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary' }} variant="h2" >
          Tasks
          <Divider />
        </Typography>



        {/* Toggle Buttons  */}
        <ToggleButtonGroup
      // value={alignment}
      exclusive
      // onChange={handleAlignment}
      aria-label="text alignment"

      style={{marginTop: "30px"}}
    >
      <ToggleButton value="left" aria-label="left aligned">
        All
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        Done
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        In progess
      </ToggleButton>
    </ToggleButtonGroup>
        {/* <FIlter buttons /> */}


      {/* ToDo Items */}
      <ToDo />
      {/* ==ToDo ==  */}

        
      </CardContent>

    </Card>
      </Container>
  );
}
