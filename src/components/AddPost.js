import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
  memo
} from "react";
import CreatableSelect from "react-select/creatable";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, useSelector } from "react-redux";
import { OnChangeValue } from "react-select";
import { UserPostPost, ResetAll } from "../actions/actionPost";
import Swal from "sweetalert2";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
const AddPost = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const a = [];
  const statuspost = useSelector((state) => state.userPostReducer);

  const editorRef = useRef(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (newValue: OnChangeValue<options, true>) => {
    newValue.forEach((element) => {
      if(a.includes(element.value)){

      }else{
      a.push(element.value);
      }
    });
    console.log(a)
  };

  const postPost = (e) => {
    e.preventDefault();
    dispatch(
      UserPostPost({
        name: name,
        content: editorRef.current.getContent(),
        user: JSON.parse(localStorage.getItem("userInfo")).id,
        tags: a,
        cate:2,
      })
    );
  };
  const { loading, success, error } = statuspost;

  const toast = () => {
    if (!loading && success) {
      if (success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thêm bài viết thành công",
          showConfirmButton: false,
          timer: 2500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Thêm bài viết thành công",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    }
  
  };
  toast();
  useEffect(() => {
    dispatch(ResetAll());
  }, [loading]);

  return (
    <>
      <div className="col-sm-9 mb-5 contentWrapper">
        <div className="row">
          <h4 className="col-sm-9">Bài viết</h4>
        </div>

        <div className="border-top mt-2"></div>
        <form onSubmit={postPost} className="m-3">
          <div className="form-group">
            <input
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Tên bài viết"
            />
          </div>

          <div className="form-group">
            <CreatableSelect
              onChange={handleChange}
              placeholder="Nhập tag bài viết"
              isMulti
              options={options}
            />
          </div>

          <div className="form-group">
            <p>Nội dung bài viết</p>
            <Editor
              apiKey="pyeb1tcg8nh6u71yae7aggp4wyxhrafj6r7hlfqojksu320g"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                selector: "textarea",
                height: 500,
                menubar: true,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help" +
                  "fullscreen",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            <button
              type="submit"
              className="btn btn-secondary float-right mt-4"
            >
              Thêm bài viết
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default memo(AddPost);
