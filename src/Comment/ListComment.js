import { format, parseISO } from "date-fns";
function ListComment({ comment, onSetIDcha }) {
  function actionClickReplay(IDcha) {
    console.log(IDcha);
  }
  function renderDataCha() {
    if (comment.length > 0) {
      return comment.map((value, key) => {
        const formatGio = format(parseISO(value.created_at), "HH:mm:ss");
        const formatNam = format(parseISO(value.created_at), "dd/MM/yyyy");
        if (value.id_comment === 0) {
          return (
            <li key={key} class="media">
              <a class="pull-left" href="#">
                <img
                  class="media-object"
                  src="/images/blog/man-four.jpg"
                  alt=""
                />
              </a>
              <div class="media-body">
                <ul class="sinlge-post-meta">
                  <li>
                    <i class="fa fa-user"></i>
                    {value.name_user}
                  </li>
                  <li>
                    <i class="fa fa-clock-o"></i> {formatGio}
                  </li>
                  <li>
                    <i class="fa fa-calendar"></i> {formatNam}
                  </li>
                </ul>
                <p>{value.comment}</p>
                <button
                  class="btn btn-primary"
                  href=""
                  onClick={() => onSetIDcha(value.id)}
                >
                  <i class="fa fa-reply"></i>Replay
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
            <li class="media second-media">
              <a class="pull-left" href="#">
                <img
                  class="media-object"
                  src="/images/blog/man-four.jpg"
                  alt=""
                />
              </a>
              <div class="media-body">
                <ul class="sinlge-post-meta">
                  <li>
                    <i class="fa fa-user"></i>
                    {value.name_user}
                  </li>
                  <li>
                    <i class="fa fa-clock-o"></i> {formatGio}
                  </li>
                  <li>
                    <i class="fa fa-calendar"></i> {formatNam}
                  </li>
                </ul>
                <p>{value.comment}</p>
                <a class="btn btn-primary" href="">
                  <i class="fa fa-reply"></i>Replay
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
      <div class="response-area">
        <h2>{comment.length} RESPONSES</h2>
        <ul class="media-list">{renderDataCha()}</ul>
      </div>
    </>
  );
}
export default ListComment;
