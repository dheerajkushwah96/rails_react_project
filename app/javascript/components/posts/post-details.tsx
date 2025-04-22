import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../api/post-api";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Divider,
  CardHeader,
  Grid,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    fetchPost(id)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [id]);

  if (!post) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box maxWidth="md" mx="auto" mt={4}>
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardHeader
          title={post.title}
          subheader={`Created at: ${post.created_at}`}
        />
        <Divider />
        <CardContent>
          <Typography variant="body1" color="text.primary" paragraph>
            {post.body}
          </Typography>
        </CardContent>
        <Divider />
      </Card>
    </Box>
  );
}

export default PostDetails;
