import { useTranslation } from "react-i18next";
import { Worksheet } from "../../data/worksheets";

interface ModelsModalProps {
    worksheet: Worksheet | null;
    closeModal: () => void;
}

export const ModelsModal = (props: ModelsModalProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'Models' });
    const { t: tPrev } = useTranslation('prev');

    const { worksheet, closeModal } = props;

    if (!worksheet) {
        return null;
    }

    return (
        <>
            <div className="modal fixed inset-0 z-50 overflow-auto bg-brand-white bg-opacity-70 flex p-4">
                <div
                    className="relative bg-brand-white w-full h-fit m-auto max-w-3xl flex-col flex rounded-lg shadow-lg overflow-hidden">
                    {/* Modal content */ }
                    <div className={ "modal-header bg-brand-orange px-4 py-2" }>
                        { tPrev(worksheet.title) }
                    </div>
                    <div className="my-4 px-4">
                        { tPrev(worksheet.description) }
                    </div>
                    { (worksheet.teachersnotes && (
                        <div className="my-4 px-4">
                            <a href={ tPrev(worksheet.teachersnotes) }>{ t("teachersNotes") }</a>
                        </div>
                    )) }
                    {
                        worksheet.downloads.map((download, index) => (
                            <div className="my-4 px-4 border-2" key={ index }>
                                { (download.description && (
                                    <div className="mb-4">
                                        { tPrev(download.description) }
                                    </div>
                                )) }
                                <a href={ tPrev(download.worksheet) }>{ t("download") }</a>
                            </div>
                        ))
                    }
                    <div className="grid place-items-center">
                        <img
                            src={ worksheet.image.replace('static/images', 'images/projects') }
                            alt={ worksheet.title }/>
                    </div>
                    {(worksheet.tags && (
                        <div className="my-4 px-4">
                            { t("tags") }: {worksheet.tags.map((tag, index) => (
                                <span className={"m-2 p-2 border-2"} key={ index }>{ tag } </span>
                            )) }

                        </div>
                    )) }
                    <div className="flex justify-end">
                        <button
                            className={"bg-brand-cyan text-brand-white px-4 py-2 rounded-full mr-4 mb-4" }
                            type="button"
                            onClick={ () => closeModal() }
                        >
                            {t('close')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
