import { useState } from 'react';
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
            2. 댓글 수정 기능
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )
    */

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
    const [editInput, setEditInput] = useState(false);
    const [editInputValue, setEditInputValue] = useState('');

    console.log(post.Comments);

    const onAddComments = () => {
        setPost((post) => ({
            ...post,
            Comments: [
                ...post.Comments,
                {
                    User: {
                        nickname: newUser,
                    },
                    content: newComment,
                    myComment: true,
                },
            ],
        }));
        console.log(post);
    };

    const onDeleteComments = (content) => {
        console.log(content);
        setPost((post) => ({
            ...post,
            Comments: post.Comments.filter((el) => el.content !== content),
        }));
    };

    const onSaveEditComments = (content, nickname) => {
        setPost((post) => ({
            ...post,
            Comments: [
                ...post.Comments,
                {
                    User: {
                        nickname: post.Comments.find((el) => el.User.nickname === nickname),
                    },
                    content: content,
                    myComment: true,
                },
            ],
        }));
    };

    const onEditComments = () => {
        setEditInput((prev) => !prev);
        // setPost((post) => ({
        //   ...post,
        //   Comments : post.Comments
        // }))
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
                <p>
                    댓글 수: <span>{post.Comments.length}</span>
                </p>
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
                    onEditComments={onEditComments}
                    onSaveEditComments={onSaveEditComments}
                    editInput={editInput}
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
