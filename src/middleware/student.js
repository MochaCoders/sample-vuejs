export default function student({ next, store }) {
  if (store.getters["auth/isStudent"]) next();
  else next({ name: "notFound" });
}
