'use client'

import React from "react";
import Image from "next/image";
import LapisRedacao from '@/app/Assets/AuthdUser/redacao/LapisRedacao.svg'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function RedacaoFeita() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} className="min-h-[125px] w-[17vw] h-[19vh] flex items-center justify-center bg-white cursor-pointer rounded-[20px] border-none">
                <div className="relative w-[8vw] h-[8vh]">
                    <Image
                        src={LapisRedacao}
                        alt="Simbolo de lapis para o botao de redação"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                radius="2xl"
                classNames={{
                    body: "py-6",
                    base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                    header: "border-b-[1px] border-[#292f46]",
                    footer: "border-t-[1px] border-[#292f46]",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="foreground" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}