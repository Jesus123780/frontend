import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import styled, { css } from 'styled-components'

export const InputFiles = ({ onChange, reset }) => {
    const [images, setImages] = useState([])
    const [previewImg, setPreviewImg] = useState([])
    const fileInputRef = useRef(null)

    const onFileInputChange = event => {
        const { files } = event.target
        setImages([...images, ...files])
        onChange([...images, ...files])

        let newFiles = []
        for (let i = 0; i < files.length; i++) newFiles = [...newFiles, files[i]]

        let newFilesPreview = []
        for (let i = 0; i < newFiles.length; i++) {
            newFilesPreview = [
                ...newFilesPreview,
                {
                    temPath: URL.createObjectURL(files[i]),
                    name: files[i]?.name,
                    ext: files[i]?.name?.substring(files[i]?.name?.lastIndexOf('.'), files[i]?.name?.length)
                }
            ]
        }

        setPreviewImg([
            ...previewImg,
            ...newFilesPreview
        ])
    }

    useEffect(() => {
        if (reset){
            setImages([])
            setPreviewImg([])
        }
    }, [reset])

    const handleDelete = (e, item, index) => {
        e.stopPropagation()
        const newImages = images.filter((x, i) => (x.name !== item.name && i !== index))
        const previewNewImages = previewImg.filter((x, i) => (x.temPath !== item.temPath && i !== index))

        setImages(newImages)
        setPreviewImg(previewNewImages)
    }

    // const onTargetClick = () => {
    //     fileInputRef.current.click()
    // }
    return (
        <>
            <Box>
                <InputFile
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    id="dropZone"
                    type="file"
                    multiple
                />
                <DropZone
                    onClick={e => {
                        e.stopPropagation()
                        document.getElementById('dropZone').click()
                    }}>
                    {!previewImg?.length && (
                        <Label>Click para subir Archivos</Label>
                    )}
                    <Preview>
                        {!!previewImg?.length && previewImg?.map((x, i) => (
                            <Fragment key={i}>
                                <ImgCont title={x.name}>
                                    <ButtonDelete onClick={e => handleDelete(e, x, i)}>
                                        <i>Delete</i>
                                    </ButtonDelete>
                                    {(x.ext === '.png' || x.ext === '.svg' || x.ext === '.jpg' || x.ext === '.jpeg') ?
                                        <Image src={x?.temPath} />
                                        : (x.ext === '.docx' || x.ext === '.docm' || x.ext === '.dotx' || x.ext === '.dotm') ?
                                            <i>DocWord</i>
                                            : (x.ext === '.xlsx' || x.ext === '.xlsm' || x.ext === '.xlsb' || x.ext === '.xltx' || x.ext === '.xls') ?
                                                <i>Execl</i>
                                                : <i>FILE COMUN</i>
                                    }
                                    <FileText>{x.name}</FileText>
                                </ImgCont>
                            </Fragment>
                        ))}
                    </Preview>
                </DropZone>
            </Box>
        </>
    )
}
const Box = styled.div`
    display: block;
    ${ ({ width }) => width && css` width: ${ width }; ` }
    flex-direction: ${ ({ direction }) => (direction ? direction : 'row') };
    position: relative;
    box-sizing: border-box;
`
const Label = styled.label`
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 40px;
    box-sizing: border-box;
    cursor: pointer;
`
const InputFile = styled.input`
    display: none;
`
const DropZone = styled.div`
    min-height: 150px;
    max-height: 300px;
    overflow: auto;
    cursor: pointer;
    background-color: ${ ({ theme }) => theme.TColor };
    border: 2px dashed rgba(0, 0, 0, 0.1);
    display: grid;
    box-sizing: border-box;
`
const Preview = styled.div`
    position: relative;
    display: flex;
    vertical-align: top;
    margin: 16px;
    min-height: 100px;
    flex-flow: wrap;
`
const ImgCont = styled.div`
    border-radius: 4px;
    width: 25%;
    height: 25%;
    min-width: 80px;
    min-height: 80px;
    position: relative;
    z-index: 10;
    margin: 10px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const FileText = styled.span`
    position: absolute;
    bottom: 0;
    color: #FFF;
    width: 100%;
    background-color: rgba(0,0,0,.7);
    padding: 2px;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
const ButtonDelete = styled.button`
    background-color: #fff;
    border: none;
    outline: none;
    position: absolute;
    right: -2px;
    top: 0px;
    border-radius: 2px;
    padding: 2px 0;
    cursor: pointer;
`
// const Details = styled.div`
//     z-index: 20;
//     position: absolute;
//     top: 0;
//     left: 0;
//     opacity: 0;
//     font-size: 13px;
//     min-width: 100%;
//     max-width: 100%;
//     padding: 2em 1em;
//     text-align: center;
//     color: rgba(0, 0, 0, 0.9);
//     line-height: 150%;
// `
// const Progress = styled.div`
//     background: linear-gradient(to bottom, #666, #444);
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     width: 100%;
// `
// const SpanCont = styled.div`
//     overflow: hidden;
//     text-overflow: ellipsis;
// `
// const Span = styled.span`
//     background-color: rgba(255, 255, 255, 0.4);
//     padding: 0 0.4em;
//     border-radius: 3px;
// `

InputFiles.propTypes = {
    onChange: PropTypes.func.isRequired,
    reset: PropTypes.bool
}