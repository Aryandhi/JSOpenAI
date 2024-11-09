export default function Home() {
    return <div>
        <div className="container mx-auto">
            <form>
                <div className="form-control">
                    <label>
                        <span className="label-text">Content</span>
                    </label>
                    <textarea name="content" rows={3}></textarea>
                </div>
            </form>
        </div>
    </div>
}