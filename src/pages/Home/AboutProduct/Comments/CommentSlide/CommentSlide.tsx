import { Card, CardContent, Typography } from "@mui/material";

function CommentSlide({ commentary }) {
    console.log(commentary);
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {commentary.description}
                </Typography>
                <Typography variant="body2">
                    {commentary.data}
                    <br />
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CommentSlide;