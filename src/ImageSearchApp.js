import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  Typography,
  CircularProgress,
  Pagination,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const ACCESS_KEY = process.env.REACT_APP_PIXABAY_ACCESS_KEY;
const API_URL =
  "https://pixabay.com/api/?key=48993778-9ede39a6c5930a7214e7e4d17&q=yellow+flowers&image_type=photo&pretty=true";
// const API_URL = "https://api.unsplash.com/search/photos";
// const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const ImageSearchApp = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = async (searchTerm, pageNumber, append = false) => {
    if (!searchTerm) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}?key=${ACCESS_KEY}&q=${encodeURIComponent(
          searchTerm
        )}&page=${pageNumber}&per_page=5&image_type=photo`
      );

      if (!response.ok) throw new Error("Failed to fetch images");

      const data = await response.json();
      console.log("Response received:", data);

      if (!data.hits || data.hits.length === 0) {
        setImages([]);
        setTotalPages(1);
        return;
      }

      setImages(append ? [...images, ...data.hits] : data.hits);
      setTotalPages(Math.ceil(data.totalHits / 10));
    } catch (err) {
      console.error("Error fetching images:", err);
      setError("Failed to load images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearchQuery(query);
    setPage(1);
    setImages([]);
    fetchImages(query, 1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    fetchImages(searchQuery, value);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      setPage(nextPage);
      fetchImages(searchQuery, nextPage, true);
      console.log("here is my conosle ")
    }
  };

  return (
    <Container maxWidth="md" style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Image Search App
      </Typography>

      <TextField
        fullWidth
        variant="standard"
        color="warning"
        label="Search for images"
        placeholder="Search for images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        style={{ marginBottom: "20px" }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        disabled={loading}
      >
        Search
      </Button>

      {loading && <CircularProgress style={{ marginTop: "20px" }} />}
 
    
      <Grid container spacing={2} style={{ marginTop: "20px" ,objectFit:"cover"}}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={uuidv4()}>
            <Card className="image-card">
              <CardMedia
                component="img"
                height="200"
                
                width="300"
                image={image.webformatURL}
                alt={image.tags}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        />
      )}

      {images.length > 0 && page < totalPages && !loading && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLoadMore}
          style={{ marginTop: "20px" }}
        >
          Load More
        </Button>
      )}
    </Container>
  );
};

export default ImageSearchApp;
