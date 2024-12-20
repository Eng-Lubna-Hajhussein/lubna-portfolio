import * as React from "react";
import {
  cssInjection as styled,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  colors,
  SvgIcon,
} from "@basetoolkit/ui";
import { Link } from "react-router-dom";

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
}));

export default function ProjectCard({
  img,
  title,
  description,
  date,
  subtitle,
  logo,
  view,
  srcCode,
}) {
  const { red } = colors;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "100%", py: 1 }}>
      <CardHeader
        sx={{ p: 2 }}
        avatar={logo}
        title={title}
        subheader={date?date:subtitle}
        titleTypographyProps={{ variant: "subtitle2" }}
      />
      <CardMedia component="img" height={200} image={img} alt="Project img" />
      <CardActions disableSpacing sx={{ px: 1 }}>
        <Link
          to={view}
          target="_blank"
          style={{
            textDecoration: "none",
            color: "var(--secindary-color)",
            marginRight: "10px",
          }}
        >
          <Typography
            sx={{
              padding: "6px 8px",
              color: "secondary",
              "&:hover": {
                color: "var(--icon-color)",
                cursor: "pointer",
                backgroundColor: "var(--bg-dot)",
                borderRadius: "6px",
              },
            }}
          >
            View
          </Typography>
        </Link>
        {srcCode&&<Link
          to={srcCode}
          target="_blank"
          style={{
            textDecoration: "none",
            color: "var(--secindary-color)",
            
          }}
        >
          <Typography
            sx={{
              padding: "6px 8px",
              color: "primary",
              "&:hover": {
                color: "var(--icon-color)",
                cursor: "pointer",
                backgroundColor: "var(--bg-dot)",
                borderRadius: "6px",
              },
            }}
          >
            Source Code
          </Typography>
        </Link>}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <SvgIcon icon="expand_more" color="black" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Description:</Typography>
          <Typography sx={{ marginBottom: 2 }}>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
