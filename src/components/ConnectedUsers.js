const ConnectedUsers = ({ users }) => <div className="flex p-4 bg-white rounded shadow-md">
    <h4 className="text-lg font-semibold mb-2 pr-2">Connected Users</h4>
    {users.map((u, idx) => (
        <h6 key={idx} className="text-sm text-gray-700">
            {u+","}
        </h6>
    ))}
</div>
export default ConnectedUsers;