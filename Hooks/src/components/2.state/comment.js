import styled from 'styled-components';

function Comment({
    comments,
    onDeleteComments,
    changeIsEdit,
    editInput,
    setEditInputValue,
    onSaveEditComments,
    editInputValue,
}) {
    console.log(comments, '확인');
    console.log(comments);
    return comments.map((el) => (
        <S.CommentItem>
            <p>
                작성자: <span>{el.User.nickname}</span>
            </p>
            {el.myComment ? (
                <div>
                    <p>
                        댓글 내용:{' '}
                        {el.isEdit ? (
                            <>
                                <input onChange={(e) => setEditInputValue(e.target.value)} />
                                <button
                                    onClick={() => onSaveEditComments(editInputValue, el.userId)}
                                >
                                    수정완료
                                </button>
                            </>
                        ) : (
                            <span>{el.content}</span>
                        )}
                    </p>
                    <button onClick={() => onDeleteComments(el.content)}>삭제</button>
                    <button onClick={() => changeIsEdit(el.commentId)}>수정하기</button>
                </div>
            ) : (
                <p>
                    댓글 내용: <span>{el.content}</span>
                </p>
            )}
        </S.CommentItem>
    ));
}
export default Comment;

const CommentItem = styled.li`
    border: 1px solid #000;
    margin: 10px;
`;

const S = {
    CommentItem,
};
