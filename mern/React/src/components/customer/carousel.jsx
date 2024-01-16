import ImageGallery from "react-image-gallery";

function Carousel() {

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/500/",
        },
        // {
        //     original: "https://picsum.photos/id/1015/1000/500/",
        // },
        // {
        //     original: "https://picsum.photos/id/1019/1000/500/",
        // },
    ];
    return (
        <div className="pl-10 w-[90%]">
            <ImageGallery items={images} />;
        </div>
    )
}

export default Carousel