import { useState, useRef } from 'react';
import styled from 'styled-components';
import Comment from '../../components/2.state/comment';

function State2() {
    /*  
    문제 2.

    Q1. 아래 작성된 state의 mock data를 활용하여
        댓글 목록을 화면에 랜더링 해보세요 :)
        Components는 src/components/state/comment.js를 활용하세요
        
    Q2. 댓글 작성 수정 삭제 기능을 구현해보세요 :)
            1. 댓글 작성 기능
                input에서 작성자의 값을 받아오는 state
                input에서 작성글의 값을 받아오는 state
                기존 데이터에서 위 두 개의 값을 추가 ==> 데이터 관리하는 state (복사해서 업데이트)

                본인이 작성한 댓글이라는 조건 ==> myComment 의 값은 항상 true가 되어야 함

            2. 댓글 수정 기능
                수정하기 버튼
                   버튼을 눌렀을 때 댓글 내용이 input 창으로 변환
                   현재 수정하고자 하는 댓글만 input으로 변경되어야 함 (다른 댓글까지 input으로 변환되면 X)
                   댓글을 입력해서 데이터를 추가할 때 현재 편집 상태인지에 대한 값이 포함되어야 함. 기본 상태는 false ==> true가 될 때만 input으로 변환된다.
                수정완료 버튼
                    input에 입력한 값 (수정한 댓글 내용)을 받아오는 state
                    위 state(수정한 댓글 내용)를 기존 데이터에 추가해서 업데이트
                    
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )
                => 전체 데이터에서 해당되는 (삭제하는) 데이터의 id 값을 찾아서
                => 해당 id 값을 포함하지 않는 나머지 데이터만 set해서 업데이트 (데이터를 관리하는 state가 업데이트 되면서 댓글 리스트가 다시 정렬됨)

    */

    let commentId = 0;

    const [post, setPost] = useState({
        title: '안녕하세요 여러분 김성용 강사입니다 :)',
        content: '오늘도 모두 화이팅입니다!',
        User: {
            nickname: '김성용',
            age: 20,
            height: 190,
        },
        Comments: [
            {
                User: {
                    nickname: '김사과',
                },
                content: '오늘도 화이팅입니다!',
                myComment: false,
            },
            {
                User: {
                    nickname: '반하나',
                },
                content: '오늘도 화이팅입니다!',
                myComment: false,
            },
            {
                User: {
                    nickname: '오렌지',
                },
                content: '오늘도 화이팅입니다!',
                myComment: false,
            },
            {
                User: {
                    nickname: '이멜론',
                },
                content: '오늘도 화이팅입니다!',
                myComment: false,
            },
            {
                User: {
                    nickname: '박수박',
                },
                content: '오늘도 화이팅입니다!',
                myComment: false,
            },
        ],
    });

    /* 풀이 *******************************

  1. 작성자 input의 value값과 댓글 내용 input의 value 값을 set
  2. 댓글 작성 버튼을 누를 때 post에서 comments 배열에 객체 추가
  */
    const [newUser, setNewUser] = useState();
    const [newComment, setNewComment] = useState();
    const [editInputValue, setEditInputValue] = useState('');

    console.log(post.Comments);

    const onAddComments = () => {
        setPost((post) => ({
            ...post,
            Comments: [
                ...post.Comments,
                {
                    commentId: commentId,
                    User: {
                        nickname: newUser,
                    },
                    content: newComment,
                    myComment: true,
                    isEdit: false,
                },
            ],
        }));
        commentId += 1;
    };
    console.log(post);

    const onDeleteComments = (content) => {
        setPost((post) => ({
            ...post,
            Comments: post.Comments.filter((el) => el.content !== content),
        }));
    };

    const onSaveEditComments = (content, id) => {};

    // setEditInput((prev) => !prev);
    const changeIsEdit = (id) => {
        console.log('????', post.Comments[5].commentId);
        console.log('????', id);
        setPost(
            ...post,
            post.Comments.map((item) => (item.commentId === id ? item.isEdit : true))
        );
    };

    return (
        <S.Wrapper>
            <h1>문제2</h1>
            <S.PostBox>
                <S.PostTitle>제목: {post.title}</S.PostTitle>
                <S.PostContent>내용: {post.content}</S.PostContent>
            </S.PostBox>
            {/* 댓글 */}
            <S.PostInfo>
                <p>
                    작성자: <span>{post.User.nickname}</span>
                </p>
                <p>
                    작성자 나이: <span>{post.User.age}</span>
                </p>
                <p>
                    작성자 키: <span>{post.User.height}</span>
                </p>
            </S.PostInfo>
            <div>
                <input placeholder="작성자" onChange={(e) => setNewUser(e.target.value)} />
                <input placeholder="댓글 내용" onChange={(e) => setNewComment(e.target.value)} />
                <button onClick={onAddComments}>댓글 작성</button>
            </div>
            <S.CommentList>
                {/* list */}
                {/* 예시 데이터 */}
                <Comment
                    comments={post.Comments}
                    onDeleteComments={onDeleteComments}
                    onSaveEditComments={onSaveEditComments}
                    changeIsEdit={changeIsEdit}
                    setEditInputValue={setEditInputValue}
                    editInputValue={editInputValue}
                />
            </S.CommentList>
        </S.Wrapper>
    );
}
export default State2;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PostBox = styled.div`
    background-color: #999;
    width: 360px;
    padding: 10px;
`;

const PostTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const PostContent = styled.p`
    color: #fff;
`;

const PostInfo = styled.div`
    width: 360px;
    border: 3px solid #f00;
    padding: 10px;
    margin: 10px;

    p {
        display: flex;
        justify-content: space-around;
    }

    span {
        font-weight: bold;
    }
`;

const CommentList = styled.ul`
    width: 960px;
`;

const S = {
    Wrapper,
    PostBox,
    PostTitle,
    PostContent,
    PostInfo,
    CommentList,
};
