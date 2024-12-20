import "../../index.css";
import {
  Box,
  SvgIcon,
  TimelineDot,
  Typography,
  useTheme,
  TimelineItem,
  TimelineContent,
  Timeline,
  TimelineSeparator,
  cssInjection
} from "@basetoolkit/ui";
import resumeData from "utils/resumeData";
import CustomeButton from "components/sharedUI/button/CustomeButton";
import img from "assets/avatar.jpg";

/* Styled Components */
export const Info = cssInjection("span")``;

const CustomeTimelineItem = ({ text, title, link }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" variant="outlined" />
      </TimelineSeparator>
      <TimelineContent style={{ marginLeft: 10 }}>
        {link ? (
          <Typography
            sx={{
              fontSize: "12px",
              xs: { fontSize: "12.5px" },
            }}
          >
            <Info>
              {title}:
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--link-color)",
                  fontWeight: "bold",
                  marginLeft: "5px",
                  textDecoration: "none",
                }}
              >
                {text}
              </a>
            </Info>
          </Typography>
        ) : (
          <Typography
            sx={{
              fontSize: "12px",
              xs: { fontSize: "12.5px" },
            }}
          >
            <Info>{title}: </Info>
            <Info
              style={{
                color: "var(--link-color)",
                fontWeight: "bold",
              }}
            >
              {text}
            </Info>
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Sidebar = () => {
  const { name, job, email, socials, phone } = resumeData;
  return (
    <Box
      className="container-shadow"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderRadius: "6px",
      }}
    >
      <Box
        style={{
          lineHeight: "18px",
          padding: "20px",
        }}
      >
        <Typography
          className="text-uppercase"
          style={{
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>
        <Typography
          className="text-capitalize"
          style={{
            color: "var(--subtitle-color)",
            fontSize: "13px",
          }}
        >
          {job}
        </Typography>
      </Box>

      <Box
        style={{
          clipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
          marginTop: "-10px",
        }}
      >
        <img src={img} alt="lubna hajhussein" height={"250px"} />
      </Box>

      <Box display="flex" justifyContent="flex-start" mt={-6}>
        <Timeline
          style={{
            alignItems: "flex-start",
            paddingLeft: "10px",
          }}

        >
          <TimelineItem >
            <TimelineSeparator >
              <TimelineDot color="primary" style={{padding:"18px"}}>
                <SvgIcon icon="info" fontSize={15} color="black" variant="filled" />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>
          <CustomeTimelineItem title="Name" text={name} link="" />
          <CustomeTimelineItem title="Job" text={job} link="" />
          <CustomeTimelineItem title="Email" text={email} link="" />
          <CustomeTimelineItem title="Phone" text={phone} link="" />
          {Object.keys(socials).map((key, index) => (
            <CustomeTimelineItem
              title={key}
              text={socials[key].text}
              link={socials[key].link}
              key={index}
            />
          ))}
        </Timeline>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
          paddingBottom: "25px",
        }}
      >
        <a
          href="https://drive.google.com/drive/folders/1tRKsGnrI7qJ4UYyQUHtbQLtwBJU_VlfD?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <CustomeButton text={"Download CV"} icon={<SvgIcon icon="download" variant="filled" color="black" fontSize={18} />} />
        </a>
      </Box>
    </Box>
  );
};

export default Sidebar;
