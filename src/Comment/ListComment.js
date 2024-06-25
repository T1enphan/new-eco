import { format, parseISO } from "date-fns";
function ListComment({ comment, onSetIDcha }) {
  // function actionClickReplay(IDcha) {
  //   console.log(IDcha);
  // }
  console.log("comment", comment);
  function renderDataCha() {
    if (comment.length > 0) {
      return comment.map((value, key) => {
        const formatGio = format(parseISO(value.created_at), "HH:mm:ss");
        const formatNam = format(parseISO(value.created_at), "dd/MM/yyyy");
        if (Number(value.id_comment) === 0) {
          return (
            <li key={key} className="media">
              <a className="pull-left" href="#">
                <img
                  className="media-object"
                  src="/images/blog/man-four.jpg"
                  alt=""
                />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li>
                    <i className="fa fa-user"></i>
                    {value.name_user}
                  </li>
                  <li>
                    <i className="fa fa-clock-o"></i> {formatGio}
                  </li>
                  <li>
                    <i className="fa fa-calendar"></i> {formatNam}
                  </li>
                </ul>
                <p>{value.comment}</p>
                <button
                  className="btn btn-primary"
                  href=""
                  onClick={() => onSetIDcha(value.id)}
                >
                  <i className="fa fa-reply"></i>Replay
                </button>
              </div>
              <li>{renderDataCon(value.id)}</li>
            </li>
          );
        }
      });
    }
  }
  function renderDataCon(onSetIDcha) {
    if (comment.length > 0) {
      return comment.map((value, key) => {
        const formatGio = format(parseISO(value.created_at), "HH:mm:ss");
        const formatNam = format(parseISO(value.created_at), "dd/MM/yyyy");
        if (value.id_comment === onSetIDcha) {
          return (
            <li key={key} className="media second-media">
              <a className="pull-left" href="#">
                <img
                  className="media-object"
                  src="/images/blog/man-four.jpg"
                  alt=""
                />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li>
                    <i className="fa fa-user"></i>
                    {value.name_user}
                  </li>
                  <li>
                    <i className="fa fa-clock-o"></i> {formatGio}
                  </li>
                  <li>
                    <i className="fa fa-calendar"></i> {formatNam}
                  </li>
                </ul>
                <p>{value.comment}</p>
                <a className="btn btn-primary" href="">
                  <i className="fa fa-reply"></i>Replay
                </a>
              </div>
            </li>
          );
        }
        return null; // Trả về null nếu điều kiện không đúng
      });
    } else {
      return <p>No comments available.</p>; // Giá trị mặc định khi không có bình luận
    }
  }

  return (
    <>
      <div className="response-area">
        <h2>{comment.length} RESPONSES</h2>
        <ul className="media-list">{renderDataCha()}</ul>
      </div>
    </>
  );
}
export default ListComment;
