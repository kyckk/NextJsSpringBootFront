type FileProps = {
    files: File[],
    
    // deleteFile?:Function;
    // addFile?:Function;
    onChangeFile?: Function;
}

export default function fileList({ files, onChangeFile }: FileProps): any {
    const onChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        onChangeFile?.(e)
    }
    console.log(files);
    return (
       
        <div className="col-mb-5">
            <label htmlFor="input-file" className="form-label">이미지 선택</label>
            {files.map(file=>(<input key={file.name} type="file"  onChange={onChange} name="uploadFile" className="form-control" multiple />))}    
        </div>
        
    )




}