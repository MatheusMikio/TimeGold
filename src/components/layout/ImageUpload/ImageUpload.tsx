import { useState, useRef } from 'react'
import { FiUpload, FiX } from 'react-icons/fi'
import styles from './ImageUpload.module.css'

type ImageUploadProps = {
    id: string
    name: string
    label: string
    variant?: 'logo' | 'banner'
}

export default function ImageUpload({ id, name, label, variant = 'logo' }: ImageUploadProps) {
    const [preview, setPreview] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const removeFile = () => {
        setPreview('')
        if (inputRef.current) {
            inputRef.current.value = ''
        }
    }

    return (
        <div className={styles.imageUpload}>
            {!preview ? (
                <>
                    <input
                        ref={inputRef}
                        type="file"
                        name={name}
                        accept="image/*"
                        onChange={handleFileChange}
                        id={id}
                        className={styles.fileInput}
                    />
                    <label htmlFor={id} className={styles.fileLabel}>
                        <FiUpload /> {label}
                    </label>
                </>
            ) : (
                <div className={`${styles.previewWrapper} ${variant === 'banner' ? styles.bannerPreview : styles.logoPreview}`}>
                    <img src={preview} alt="Preview" className={styles.previewImage} />
                    <input
                        ref={inputRef}
                        type="file"
                        name={name}
                        accept="image/*"
                        onChange={handleFileChange}
                        id={id}
                        className={styles.fileInput}
                    />
                    <button
                        type="button"
                        onClick={removeFile}
                        className={styles.removeBtn}
                        title="Remover imagem"
                    >
                        <FiX />
                    </button>
                </div>
            )}
        </div>
    )
}
