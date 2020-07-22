import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { getResources } from '../../state/actions/resourceHubActions';
import ResourceCard from '../../components/Cards/ResourceCard';
import ResourceUploadForm from '../../components/ResourceHub/ResourceUploadForm';

const useStyles = makeStyles({
  resourceContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexGrow: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    paddingTop: '1rem',
  },
  formContainer: {
    display: 'block',
    maxWidth: '80vw',
    padding: '2rem',
    borderRadius: '0.8rem',
    margin: '1rem',
    boxShadow: '0 6px 10px #d3d3d3',
  },
});

const ResourceHub = props => {
  const { getResources, resources } = props;
  const classes = useStyles();

  useEffect(() => {
    getResources();
  }, [getResources]);

  return (
    <div className={classes.resourceContainer}>
      <Grid container item xs={12} spacing={3}>
        {resources &&
          resources.map((resource, key) => (
            <ResourceCard key={key} resource={resource} />
          ))}{' '}
      </Grid>
      <div className={classes.formContainer}>
        <ResourceUploadForm />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    resources: state.resourceHubReducer.resources,
    getResources: state.resourceHubReducer.resources,
  };
};

export default connect(mapStateToProps, {
  getResources,
})(ResourceHub);
