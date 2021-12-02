import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PreviewIcon from '@mui/icons-material/Preview';


function Semster2() {
    const theme = useTheme();


    return (
        <div style={{display: "flex",flexWrap: "wrap",margin:0}}>
                <Card sx={{ display: 'flex',width: 350,marginTop:3,marginLeft:2 }}>
      <Box>
        <CardContent >
          <Typography component="div" variant="h5">
            <span style={{color: "#3f51b5"}}>CHEMISTRY IIB</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            FCE 191
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PreviewIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://assets.ltkcontent.com/images/44568/chemistry-beakers_0066f46bde.jpg"
        alt="Live from space album cover"
      />
    </Card>

    <Card sx={{ display: 'flex',width: 350,marginLeft:2,marginTop:3 }}>
      <Box>
        <CardContent >
          <Typography component="div" variant="h5">
          <span style={{color: "#3f51b5"}}>PHYSICS IIB</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            FCE 192
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PreviewIcon sx={{ height: 38, width: 38,marginTop:3 }} />
          </IconButton>
          <IconButton aria-label="next">
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 183 }}
        image="https://static.scientificamerican.com/blogs/cache/file/FE946D19-DD8A-4F50-968B5E142460AFCE_source.jpg?w=590&h=800&F34CBDA2-EC01-40A3-93FC20A458CC0C05"
        alt="Live from space album cover"
      />
    </Card>
    
    <Card sx={{ display: 'flex',width: 350,marginTop:3,marginLeft:2 }}>
      <Box>
        <CardContent >
          <Typography component="div" variant="h5">
            <span style={{color: "#3f51b5"}}>CHEMISTRY IIB</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            FCE 191
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PreviewIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://assets.ltkcontent.com/images/44568/chemistry-beakers_0066f46bde.jpg"
        alt="Live from space album cover"
      />
    </Card>

    <Card sx={{ display: 'flex',width: 350,marginLeft:2,marginTop:3 }}>
      <Box>
        <CardContent >
          <Typography component="div" variant="h5">
          <span style={{color: "#3f51b5"}}>PHYSICS IIB</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            FCE 192
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PreviewIcon sx={{ height: 38, width: 38,marginTop:3 }} />
          </IconButton>
          <IconButton aria-label="next">
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 183 }}
        image="https://static.scientificamerican.com/blogs/cache/file/FE946D19-DD8A-4F50-968B5E142460AFCE_source.jpg?w=590&h=800&F34CBDA2-EC01-40A3-93FC20A458CC0C05"
        alt="Live from space album cover"
      />
    </Card>


    <Card sx={{ display: 'flex',width: 350,marginTop:3,marginLeft:2 }}>
      <Box>
        <CardContent >
          <Typography component="div" variant="h5">
            <span style={{color: "#3f51b5"}}>CHEMISTRY IIB</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            FCE 191
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PreviewIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://assets.ltkcontent.com/images/44568/chemistry-beakers_0066f46bde.jpg"
        alt="Live from space album cover"
      />
    </Card>

    <Card sx={{ display: 'flex',width: 350,marginLeft:2,marginTop:3 }}>
      <Box>
        <CardContent >
          <Typography component="div" variant="h5">
          <span style={{color: "#3f51b5"}}>PHYSICS IIB</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            FCE 192
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PreviewIcon sx={{ height: 38, width: 38,marginTop:3 }} />
          </IconButton>
          <IconButton aria-label="next">
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 183 }}
        image="https://static.scientificamerican.com/blogs/cache/file/FE946D19-DD8A-4F50-968B5E142460AFCE_source.jpg?w=590&h=800&F34CBDA2-EC01-40A3-93FC20A458CC0C05"
        alt="Live from space album cover"
      />
    </Card>

    <Card sx={{ display: 'flex',width: 350,marginTop:3,marginLeft:2 }}>
      <Box>
        <CardContent >
          <Typography component="div" variant="h5">
            <span style={{color: "#3f51b5"}}>CHEMISTRY IIB</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            FCE 191
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PreviewIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://assets.ltkcontent.com/images/44568/chemistry-beakers_0066f46bde.jpg"
        alt="Live from space album cover"
      />
    </Card>

    <Card sx={{ display: 'flex',width: 350,marginLeft:2,marginTop:3 }}>
      <Box>
        <CardContent >
          <Typography component="div" variant="h5">
          <span style={{color: "#3f51b5"}}>PHYSICS IIB</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            FCE 192
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PreviewIcon sx={{ height: 38, width: 38,marginTop:3 }} />
          </IconButton>
          <IconButton aria-label="next">
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 183 }}
        image="https://static.scientificamerican.com/blogs/cache/file/FE946D19-DD8A-4F50-968B5E142460AFCE_source.jpg?w=590&h=800&F34CBDA2-EC01-40A3-93FC20A458CC0C05"
        alt="Live from space album cover"
      />
    </Card>
        </div>
    )
}

export default Semster2
