import { createSlice } from "@reduxjs/toolkit"

const initState = {
    email: ""
}

const loginSlicer = createSlice({
    name: "loginSlicer",
    initialState: initState,
    reducers: {
        login: (state, action) => { // state : 현재 상태 정보 / action - 전달받은 액션 객체
            console.log('login reducer..')
            console.log('action : ', action)
            console.log('action.payload : ', action.payload)

            
            return { email: action.payload.email };
        },
        logout: () => {
            console.log('logout reducer..')
            return { email: '' };

        }
    }
})

export const { login, logout } = loginSlicer.actions; // 액션 생성 함수
export default loginSlicer.reducer; // 슬라이스의 리듀서를 기본값으로 내보냄 - 리덕스 스토어에 등록하여 상태관리 수행