import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Card,
  CardHeader,
  Divider,
  CardContent,
} from "@mui/material";
import { createPost } from "../api/post-api";
import { PostFormT } from "../../posts/form-values";
import postSchema from "../../posts/zod-schema";

const CreatePostForm = () => {
  const navigate = useNavigate();

  const form = useForm<PostFormT>({
    criteriaMode: "all",
    defaultValues: {},
    mode: "onBlur",
    resolver: zodResolver(postSchema.strict()),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  const onSubmit = async (data: PostFormT) => {
    try {
      const response = await createPost(data);
      console.log("Post created successfully:", response.data);
      reset();
      navigate("/posts");
    } catch (error: any) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Box maxWidth="md" mx="auto" mt={4}>
      <Card sx={{ borderRadius: 3, boxShadow: 4, p: 4 }}>
        <Divider />
        <CardContent>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              maxWidth: 500,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Create a New Post
            </Typography>

            <TextField
              label="Title"
              fullWidth
              error={!!errors.title}
              helperText={errors.title?.message}
              {...register("title")}
            />

            <TextField
              label="Body"
              fullWidth
              multiline
              minRows={4}
              error={!!errors.body}
              helperText={errors.body?.message}
              {...register("body")}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              startIcon={
                isSubmitting ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null
              }
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Box>
        </CardContent>
        <Divider />
      </Card>
    </Box>
  );
};

export default CreatePostForm;
