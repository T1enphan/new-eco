import { format, parseISO } from 'date-fns';
function Comment(props) {
  const {setComment} = props.setComment
  console.log({setComment});
  // function renderData(){
  //   if(dataComment.length > 0){
  //     return dataComment.map((value, key)=>{
  //       const formatGio = format(parseISO(value.created_at), 'HH:mm:ss');
  //       const formatNam = format(parseISO(value.created_at), 'dd/MM/yyyy');
  //       return(
  //         <li class="media">
  //           <a class="pull-left" href="#">
  //             <img
  //               class="media-object"
  //               src="/images/blog/man-four.jpg"
  //               alt=""
  //             />
  //           </a>
  //           <div class="media-body">
  //             <ul class="sinlge-post-meta">
  //               <li>
  //                 <i class="fa fa-user"></i>{value.name_user}
  //               </li>
  //               <li>
  //                 <i class="fa fa-clock-o"></i> {formatGio}
  //               </li>
  //               <li>
  //                 <i class="fa fa-calendar"></i> {formatNam}
  //               </li>
  //             </ul>
  //             <p>
  //               {value.comment}
  //             </p>
  //             <a class="btn btn-primary" href="">
  //               <i class="fa fa-reply"></i>Replay
  //             </a>
  //           </div>
  //         </li>
  //       )
  //     })
  //   }
  // }

  return (
    <>
      <div class="response-area">
        <h2>3 RESPONSES</h2>
        <ul class="media-list">
          {/* {renderData()} */}
        </ul>
      </div>
    </>
  );
}
export default Comment;
