import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLeads, deleteLead } from '../../actions/leads';

const Leads = ({ leads, getLeads, deleteLead }) => {

  useEffect(() => {
    getLeads();
  }, []);

  return (
    <Fragment>
      <h2>Leads</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  className="btn btn-danger btn sm"
                  onClick={() => {deleteLead(lead.id)}}
                >Delete</button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  leads: state.leads.leads
});

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, {
  getLeads,
  deleteLead,
})(Leads);

