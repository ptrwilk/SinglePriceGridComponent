import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.css";
import classNames from "classnames";

const SinglePriceGridComponent = () => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["cards"]}>
        <Box className={classNames(styles["card-join"], styles["card"])}>
          <Typography className={styles["title"]} variant="h1">
            Join our community
          </Typography>
          <Typography className={styles["subtitle"]} variant="h2">
            30-day, hassle-free money back guarantee
          </Typography>
          <Typography className={styles["text"]}>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </Typography>
        </Box>
        <Box className={classNames(styles["card-sub"], styles["card"])}>
          <Typography className={styles["title"]} variant="h1">
            Monthly Subscription
          </Typography>
          <Typography className={styles["price"]}>
            $29 <span>per month</span>
          </Typography>
          <Typography className={styles["text"]}>
            Full access for less than $1 a day
          </Typography>
          <Button className={styles["btn"]}>Sign Up</Button>
        </Box>
        <Box className={classNames(styles["card-why"], styles["card"])}>
          <Typography className={styles["title"]} variant="h1">
            Why Us
          </Typography>
          <Typography className={styles["text"]}>
            Tutorials by industry experts Peer & expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SinglePriceGridComponent;
