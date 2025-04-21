import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/components/ui/dialog'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { BlueButton, RedButton } from './Button'

interface ConfirmDeleteDialogProps {
  isOpen: boolean
  onClose: () => void
  // onSubmit: (name: string) => void
  onSubmit: () => void
  messageKey?: string
}

const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({ isOpen, onClose, onSubmit, messageKey = 'general.actions.deleteCollectionMessage' }) => {
  const { t } = useTranslation()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <DialogRoot
      key="add-collection-dialog"
      placement="center"
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={(detail) => {
        if (!detail.open) {
          onClose()
        }
      }}
    >
      <DialogContent bg="bg.50">
        <DialogHeader>
          <DialogTitle color="fg.DEFAULT">{t('general.actions.confirmDelete')}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {/* <p>{t('general.actions.deleteCollectionMessage')}</p> */}
          <p>{t(messageKey)}</p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <BlueButton onClick={onClose}>{t('general.actions.cancel')}</BlueButton>
          </DialogActionTrigger>
          <DialogActionTrigger asChild>
            <RedButton onClick={onSubmit}>
              {t('general.actions.delete')}
            </RedButton>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger ref={closeButtonRef} />
      </DialogContent>
    </DialogRoot>
  )
}

export default ConfirmDeleteDialog
