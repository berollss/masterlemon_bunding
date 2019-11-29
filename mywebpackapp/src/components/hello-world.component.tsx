import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const styles = require('./hello-world.component.styles.scss');

interface Props {
  title: string;
  logoImage: string;
  description: string;
  module: number;
}

export const HelloWorldComponent: React.FunctionComponent<Props> = (props: Props) => {
  const { title, logoImage, description, module } = props;
  return (
    <div>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia className={styles.media} image={logoImage} title="Logo" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`Module ${module}: ${title}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
