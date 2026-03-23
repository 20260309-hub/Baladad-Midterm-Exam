export default function BookRequest() {
  return (
    <div className="container mt-5">
      <h2>Library Book Request</h2>
      <form className="mt-3" style={{maxWidth: '500px'}}>
        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Student ID</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
  );
}
