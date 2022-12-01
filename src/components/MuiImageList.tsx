import React from 'react'
import Stack from '@mui/material/Stack'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Box from '@mui/material/Box'
import ImageListItemBar from "@mui/material/ImageListItemBar";

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList
        cols={2}
        rowHeight={164}
        sx={{
          width: 500,
          height: 450,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <h4 style={{ color: "red" }}>Variant="woven"</h4>
      <ImageList
        variant="woven"
        cols={3}
        rowHeight={164}
        sx={{
          width: 500,
          height: 450,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <h4 style={{ color: "red" }}>Variant="masonry"</h4>
      <Box sx={{width:500, height:450, overflowY:'scroll'}}>
        <ImageList
          variant="masonry"
          cols={2}
          gap={8}
          sx={{
            width: 500,
            height: 450,
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <h4 style={{ color: "red" }}>Variant="quilted"</h4>
      <ImageList
        variant="quilted"
        cols={2}
        rowHeight={164}
        sx={{
          width: 500,
          height: 450,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <h4 style={{ color: "red" }}>Variant="standard"</h4>
      <ImageList
        variant="standard"
        cols={3}
        rowHeight="auto"
        sx={{
          width: 500,
          height: 450,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}

const itemData = [
  {
    img: "https://cdn.pixabay.com/photo/2022/08/20/22/25/sea-7400124_960_720.jpg",
    title: "Sea border",
  },
  {
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__180.jpg",
    title: "Flower",
  },
  {
    img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__180.jpg",
    title: "Flower",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__180.jpg",
    title: "Sunset",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__180.jpg",
    title: "Forest",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__180.jpg",
    title: "Forest",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg",
    title: "Mountain",
  },
  {
    img: "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg",
    title: "water drops",
  },
  {
    img: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg",
    title: "Heaven",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__340.jpg",
    title: "Butterflies",
  },
  {
    img: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    title: "Lake",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__340.jpg",
    title: "Lake House",
  },
];

export default MuiImageList