var Records = React.createClass({

  getInitialState: function () {
    return {records: this.props.data};
  },

  getDefaultProps: function  () {
    return {records: []}
  },

  render: function(){

    return (
      <div className="records">
        <h2 className="title">
          Records
        </h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                Date
              </th>
              <th>
                Title
              </th>
              <th>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
          {this.props.data.map(function(record,i){
            return <Record key={record._id.$oid} record={record} />;
          })}
          </tbody>
        </table>
      </div>
      );
  }
});