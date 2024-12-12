import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Question = () => {
    return (
        <div className="mt-[150px] container-xl">
            <div className="sub-heading flex justify-between items-end gap-[60px] mb-5">
                <div>
                    <div className="flex items-center gap-[6px] text-[#f64f02] uppercase mb-2 text-sm leading-[1.2]">
                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                        <div className="font-Switzer">Faq’s</div>
                    </div>
                    <h2 className="text-black text-[36px] font-Switzer font-normal uppercase">Have any questions?</h2>
                </div>
            </div>
            <div className="flex gap-x-[40px] justify-between items-center max-lg:flex-col max-lg:gap-y-[20px]">
                <div className="max-w-[40%] max-lg:max-w-[100%] ">
                    <img className="rounded-[10px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659c242486e76af8bbcaf64_faq.jpg' />
                </div>
                <div className="max-w-[60%] w-full max-lg:max-w-[100%]">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[18px] text-[#000000]">Can I use multiple payment methods for my reservation?</AccordionTrigger>
                            <AccordionContent>
                                Cras iaculis ac amet neque sed consequat mauris. Diam arcu velit lacus venenatis mattis sit lacus. Feugiat velit facilisis ut eu id eu nibh tortor viverra volutpat iaculis ut venenatis sit.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[18px] text-[#000000]">How far in advance should I book my stay with Cruise?</AccordionTrigger>
                            <AccordionContent>
                                Non placerat ut sed sociis eget pharetra vel sit faucibus ullamcorper neque vel rhoncus diam amet metus convallis ullamcorper sit proin mauris nam facilisis in.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[18px] text-[#000000]">What types of accommodations does Cruise offer?</AccordionTrigger>
                            <AccordionContent>
                                Accumsan accumsan id ornare congue nec adipiscing amet. Rhoncus odio eget sed eu habitant justo consectetur ullamcorper tincidunt sapien facilisi orci libero.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-[18px] text-[#000000]">Can I request specific amenities or room preferences?</AccordionTrigger>
                            <AccordionContent>
                                Quis habitasse pellentesque sem feugiat scelerisque egestas tincidunt. Tellus nunc nisi velit in ullamcorper. Diam velit pharetra consectetur ut vel pharetra enim.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-[18px] text-[#000000]">Are there any special offers or discounts available?</AccordionTrigger>
                            <AccordionContent>
                                Nulla orci leo volutpat facilisis morbi. In enim vivamus enim dui hac scelerisque vestibulum Mattis sed suscipit nulla arcu wgestas at sed nunc pretium vitae viverra.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-[18px] text-[#000000]">Can I book multiple rooms or accommodations for a group?</AccordionTrigger>
                            <AccordionContent>

                                Porta cras tellus id placerat amet. Neque nulla aliquam sollicitudin augue egestas habitasse eget eget vestibulum. Fermentum pretium nulla tortor duis egestas erat vitae faucibus nisl.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Question