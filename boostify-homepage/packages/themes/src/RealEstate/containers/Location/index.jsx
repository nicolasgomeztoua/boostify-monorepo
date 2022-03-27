import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import CountUp from "react-countup";

import Box from "@pagerland/common/src/components/Box";
import Container from "@pagerland/common/src/components/Container";
import Icon from "@pagerland/common/src/components/Icon";
import Typography from "@pagerland/common/src/components/Typography";
import Grid from "@pagerland/common/src/components/Grid";

import data from "../../data";
import { googleMapsStyle } from "../../styles";

const Location = ({
  name,
  title,
  counters,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,

  CountersWrapperProps,
  CountersGridProps,
  CounterProps,
  CounterIconProps,
  CounterValueProps,
  CounterTitleProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
        </Fade>
      </Box>
    </Container>
    <Box {...CountersWrapperProps}>
      <Container>
        <Grid {...CountersGridProps}>
          {counters.map((counter, i) => (
            <Fade bottom cascade duration={600} key={i} delay={i * 100}>
              <Box {...CounterProps}>
                <Icon {...CounterIconProps} {...counter.IconProps} />
                <div>
                  <Typography {...CounterValueProps}>
                    <CountUp duration={9} end={counter.counter.value} />
                    {counter.counter.unit}
                  </Typography>
                  <Typography {...CounterTitleProps}>
                    {counter.title}
                  </Typography>
                </div>
              </Box>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Box>
  </Box>
);

Location.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  text: PropTypes.node,
  gallery: PropTypes.arrayOf(PropTypes.object),
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      IconProps: PropTypes.object.isRequired,
      title: PropTypes.node.isRequired,
      counter: PropTypes.shape({
        value: PropTypes.number.isRequired,
        unit: PropTypes.node,
      }),
    })
  ),
  map: PropTypes.shape({
    cords: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }),
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  GridProps: PropTypes.object,
  ImgProps: PropTypes.object,
  CountersWrapperProps: PropTypes.object,
  CountersGridProps: PropTypes.object,
  CounterProps: PropTypes.object,
  CounterIconProps: PropTypes.object,
  CounterValueProps: PropTypes.object,
  CounterTitleProps: PropTypes.object,
  GoogleMapsProps: PropTypes.object,
};

Location.defaultProps = {
  WrapperProps: {
    overflow: "hidden",
    pt: 80,
    pb: 0,
  },
  CaptionProps: {
    maxWidth: 736,
    mx: "auto",
  },
  TitleProps: {
    accent: "after",
    as: "h2",
    variant: "h2",
    mb: 4,
  },
  TextProps: {
    variant: "body1",
    mb: 110,
    color: "gray.1",
  },
  CountersWrapperProps: {
    py: {
      _: 48,
      md: 64,
      lg: 160,
    },
    bg: "white.0",
  },
  CountersGridProps: {
    maxWidth: "90vw",
    mx: "auto",
    gridTemplateColumns: {
      _: "repeat(3, 1fr)",
      md: "repeat(3, 1fr)",
    },
    gridGap: {
      _: "32px",
      lg: "64px",
    },
  },
  CounterProps: {
    flexBox: true,
    justifyContent: "center",
    flexDirection: {
      _: "column",
      lg: "row",
    },
    alignItems: "center",
    textAlign: {
      _: "center",
      lg: "left",
    },
  },
  CounterIconProps: {
    fontSize: 48,
    color: "brand",
    marginTop: "100px",
    height: "45px",
    mr: {
      _: 0,
      lg: 3,
    },
    mb: {
      _: 3,
      lg: 0,
    },
  },
  CounterValueProps: {
    variant: "h2",
    color: "black.6",
  },
  CounterTitleProps: {
    color: "black.2",
    variant: "h4",
    mt: -7,
  },
  GoogleMapsProps: {
    mapContainerStyle: {
      width: "100%",
      height: 480,
    },
    zoom: 13,
    options: {
      styles: googleMapsStyle,
    },
  },
  ...data.location,
};

export default Location;
