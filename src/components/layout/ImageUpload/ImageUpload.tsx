import { useState } from 'react'
import { FiUpload, FiX } from 'react-icons/fi'
import styles from './ImageUpload.module.css'

type ImageUploadProps = {
    id: string
    label: string
    variant?: 'logo' | 'banner'
    onFileChange: (file: File | null) => void
}

export default function ImageUpload({ id, label, variant = 'logo', onFileChange }: ImageUploadProps) {
    const [preview, setPreview] = useState<string>('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            onFileChange(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const removeFile = () => {
        setPreview('')
        onFileChange(null)
    }

    return (
        <div className={styles.imageUpload}>
            {!preview ? (
                <>
                    <input
                        type="file"
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
