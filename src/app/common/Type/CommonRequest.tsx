export interface CommonRequest {
  pagingNo: number;
  pagingSize: number;
  pagingSort: string;
}

export interface seacrhType {
  title: string;
  searchNum: number;
}

export interface noticeListType {
  item: Items[]

}
export interface Items {
  noticeId: string,
  title: string,
  content: string,
  insertDt: string
}