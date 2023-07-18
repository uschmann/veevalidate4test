

export default function getErrors(errors) {
    return errors.map(error => error.$message);
}