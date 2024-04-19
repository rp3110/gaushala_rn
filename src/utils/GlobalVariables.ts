import { UserDetail } from "../types/LoginResponseType";

export let globalUserDetail: UserDetail | null = null

export function setglobalUserDetail(props:{userDetail:UserDetail}) {
    globalUserDetail = props.userDetail
}