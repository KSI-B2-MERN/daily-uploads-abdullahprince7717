import { useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidV4 } from "uuid";

const supabase = createClient(
    "https://fapaboxxewvjmbimghvz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcGFib3h4ZXd2am1iaW1naHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1Njc4NDAsImV4cCI6MjAxOTE0Mzg0MH0.x5ScSG_6Gd7j5UxniS0YtLZZg36tz5tFlc-NnQBQoog"
);

function UploadImage(props) {
    const [image, setImage] = useState(null);
    const hiddenFileInput = useRef(null);

    return (
        <>
            <div className="w-1/5 h-2/3 bg-gray-300  rounded-md cursor-pointer flex items-center justify-center">
                {!image ? (
                    <>
                        <p
                            className=" text-5xl p-10"
                            onClick={() => {
                                hiddenFileInput.current.click();
                            }}
                        >
                            +
                        </p>
                    </>
                ) : (
                    <>
                        <img
                            src={image}
                            className="w-full h-full"
                            onClick={() => {
                                hiddenFileInput.current.click();
                            }}
                        />
                    </>
                )}

                <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    ref={hiddenFileInput}
                    onChange={async (e) => {
                        const file = e.target.files[0];
                        setImage(URL.createObjectURL(file));
                        const { data: uploadData, error: uploadError } =
                            await supabase.storage
                                .from("images")
                                .upload("image" + uuidV4(), file);

                        if (uploadError) {
                            alert("unable to upload image ");
                            setImage(null);
                        }

                        console.log("upload image ", uploadData);
                        const { data: getData } = supabase.storage
                            .from("images")
                            .getPublicUrl(uploadData.path);
                        console.log("get image ", getData);

                        void props.uploadImage(getData.publicUrl);
                    }}
                />
            </div>
        </>
    );
}

export default UploadImage