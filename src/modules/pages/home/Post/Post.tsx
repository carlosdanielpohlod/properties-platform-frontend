import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Post as PostType } from "@/modules/posts/domain/Post"

type PostProps = {
  data: PostType
}

export default function Post(props: PostProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.title}
        subheader={String(new Date(props.data.created_at).toLocaleDateString("pt-BR"))}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.data.images[0].url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {
            props.data.description
          }
        </Typography>
      </CardContent>
    </Card>
  );
}

