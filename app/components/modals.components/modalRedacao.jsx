import React from "react";
import Image from 'next/image'
import LapisRedacao from '@/app/Assets/AuthdUser/redacao/LapisRedacao.svg'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function ModalRedacao() {
    useDisclosure
    const { isOpen, onOpen, onOpenChange } = useDisclosure
    return (
        <>
            <Button onPress={onOpen}  className="min-h-[125px] w-[17vw] h-[19vh] flex items-center justify-center bg-white cursor-pointer rounded-[20px] border-none">
                <div className="relative w-[8vw] h-[8vh]">
                    <Image
                        src={LapisRedacao}
                        alt="Simbolo de lapis para o botao de redação"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} size="full">
                
            </Modal>
        </>
    )
}
